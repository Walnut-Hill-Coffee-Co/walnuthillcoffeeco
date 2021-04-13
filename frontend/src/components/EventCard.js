import styled from "@emotion/styled";
import React from "react";
import { FaRegClock } from "react-icons/fa";
import { RiTruckLine } from "react-icons/ri";
import PortableText from "./PortableText";
const EventStyles = styled.article`
  background-color: var(--lightGray);
  box-shadow: var(--bs);
  padding: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-rows: 7rem 56px 2px 1fr;

  h3 {
    align-self: center;
    margin: 0;
    max-height: calc(var(--lineHeight) * 2);
  }
  > .address {
    display: flex;
    height: 58px;
    /* flex-wrap: wrap; */
    gap: 2rem;
    font-size: 0.9rem;
    align-items: start;
    justify-content: space-between;
    color: var(--black);
    margin: 0;
  }
  hr {
    height: 1px;
    width: 100%;
    border: none;
    background-color: var(--green);
  }

  p {
    color: var(--black);
  }

  .icons small {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    align-items: center;

  }
      svg {
      font-size: 1.4em;
    }

  .event {
    display: inline-block;
    padding: 0.125rem 0.5rem;
    border-radius: 1rem;
    line-height: 2;
    &__private {
      background-color: var(--blue);
      color: var(--lightGray);
    }
    &__public {
      background-color: var(--orange);
      color: var(--black);
    }

    &__time {
      color: var(--blue);
      display: flex;
      align-items: center;
      gap: .5rem;
      svg {
        font-size: 1.4em
      }
    }
  }
`;
export default function EventCard({
  id,
  title,
  _rawDescription,
  location,
  eventType,
  coffeeTruckUsed,
  eventStart,
  eventEnd,
}) {

  const formattedEventStart = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    hour12: true,
  }).format(new Date(eventStart));
  const formattedEventEnd= new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    hour12: true,
  }).format(new Date(eventEnd));

  const endTime = formattedEventEnd.substring(formattedEventEnd.length - 7)

  console.log({formattedEventStart,formattedEventEnd, endTime})
  return (
    <EventStyles>
      <h3>{title}</h3>
      {location && (
        <p className="address">
          <span>
            <strong>Location: </strong> <br />
            {location?.name}
          </span>
          <span>
            {location?.address1 ? (
              <>
                {location?.address1}
                <br />
              </>
            ) : (
              <br />
            )}
            {location?.city}, {location?.state}
          </span>
        </p>
      )}
      <hr />
      <div>
        <span className="icons">
          <small>
            {eventType === "private" ? (
              <span className="event event__private">PRIVATE</span>
            ) : (
              <span className="event event__public">PUBLIC</span>
            )}{" "}
            {coffeeTruckUsed === "yes" && <RiTruckLine />}
          </small>
        </span>
        <br />
        <small className="event__time">
          <FaRegClock /> <span>{formattedEventStart} - {endTime}</span>
        </small>
        {_rawDescription && <PortableText blocks={_rawDescription} />}
      </div>
    </EventStyles>
  );
}
