import { gql, request } from "graphql-request";

const MASTER_URL: string =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
  "/master";

const getAllCourseList = async () => {
  const query = gql`
    query MyQuery {
      courseLists(first: 100, orderBy: createdAt_DESC) {
        author
        name
        id
        free
        description
        demoUrl
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        totalChapters
        sourceCode
        slug
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getSideBanner = async () => {
  const query = gql`
    query getSideBanner {
      sideBanners {
        id
        name
        banner {
          id
          url
        }
        url
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getCourseByID = async (courseId: any) => {
  const query =
    gql` 
query MyQuery {
courseLists(where: {slug: "` +
    courseId +
    `"}) {
author
name
id
free
description
demoUrl
banner {
url
}
chapter {
... on Chapter {
id
name
video {
url
}
}
}
totalChapters
sourceCode
slug
}
}
`;
  const result = await request(MASTER_URL, query);
  return result;
};

export default { getAllCourseList, getSideBanner, getCourseByID };
