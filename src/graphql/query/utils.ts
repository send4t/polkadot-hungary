export const spaceData = (): string => {
   return `id
       createdAtTime
       image
       title
       downvotesCount
       summary
       tagsOriginal
       canonical
       link
       ownedByAccount {
         id
         profileSpace {
           name
           image
         }
       }
       space {
         id
         image
         name
       }`;
}

export const articleData = (): string => {
   return `id
       canonical
       createdAtTime
       downvotesCount
       image
       title
       tagsOriginal
       body
       summary
       link
       ownedByAccount {
         profileSpace {
           name
           about
         }
       }`;
}

export const siteMap = (): string => {
   return `id
     createdAtTime
     title
     `;
}

export const postQuery = (ids: string[], isSiteMap?: boolean): string => {
   return `query MyQuery {
        posts(where: {space: ${filterIds(ids)}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
          ${isSiteMap ? siteMap() : spaceData()}
        }
      }`;
}

export const filterIds = (ids: string[]): string => {
   return ids.map(id => `"${id}"`).join(', ');
}

export const teamList = (teamList: string[]): string => {
   return filterIds(teamList) + ', orderBy: id_ASC';
}
