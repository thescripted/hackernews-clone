import React, { useState } from "react";
import { withApollo, Query } from "react-apollo";
import gql from "graphql-tag";
import Link from "./Link";

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      links {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const Search = (props) => {
  const [searching, setSearching] = useState({
    listOfLinks: [],
    filter: "",
  });

  const _executeSearch = async () => {
    const { filter } = searching;
    const result = await props.client.query({
      query: FEED_SEARCH_QUERY,
      variables: { filter },
    });
    const links = result.data.feed.links;
    setSearching({ ...searching, listOfLinks: links });
  };

  return (
    <div className="mv3">
      <div>
        Search
        <input
          type="text"
          onChange={(e) =>
            setSearching({ ...searching, filter: e.target.value })
          }
        />
        <button className="pointer ml2 button" onClick={() => _executeSearch()}>
          OK
        </button>
      </div>
      {searching.listOfLinks.map((link, index) => (
        <Link key={link.id} link={link} index={index} />
      ))}
    </div>
  );
};

export default withApollo(Search);
