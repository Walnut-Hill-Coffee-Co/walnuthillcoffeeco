const { resolve } = require("path");
const path = require(`path`);

const normalizePath = (path) => {
  if (!path.endsWith("/")) {
    path = `${path}/`;
  }
  if (!path.startsWith("/")) {
    path = `/${path}`;
  }

  return path;
};

exports.createSchemaCustomization = ({actions, schema, getNode}) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'SanityEvent',
      interfaces: ['Node'],
      fields: {
        eventInPast: {
          type:'Boolean!',
          resolve: source => new Date(source.eventStart) < new Date(),
        }
      }
    })
  ])
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const {
    data: {
      allSanityRoute: { nodes: contentNodes },
    },
  } = await graphql(
    `
      query ALL_CONTENT_NODES {
        allSanityRoute {
          nodes {
            id
            slug {
              current
            }
            page {
              title
              id
            }
          }
        }
      }
    `
  );

  await Promise.all(
    contentNodes.map(async (node, i) => {
      const {
        slug: { current: currentSlug },
        page,
        id
      } = node;

      const path = currentSlug.includes('home-page') ? '/': normalizePath(currentSlug)

      await actions.createPage({
        component: resolve(`./src/templates/page.js`),
        path,
        context: {
          id: page.id,
          routeId: id,
          title: page.title,
        },
      });
      reporter.info(`Created page: ${path}`)
    })
  );
};
