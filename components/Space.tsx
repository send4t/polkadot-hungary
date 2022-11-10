// MarcoRo
//    6943
//    3op9AadRgrf15XEPBRVVGheg2hfmSfQYhFyruyhNbJk5bL7d
// Yamne
//    7183
//    3ohANRnQ84YYHfMwpETL7YkXRnJ5cwCWfcXjshmc953epBAs
// Manne
//    10173
//    3pb5BqcoZCn4rNxW2aeX9kdmnGUVzL8M4Q1vdgiPqbupa1MK
// Paull
//    7222
//    3p9btWd5bCCc1Yk5RD2uWrwCgD5CsvzSRdzgamk9kJ2rbkCj
// Mark889
//    8488
//    3t7rPt8LK5iLLDG4BanW2ToTzpdkMLZRVea85PPkPjRC8C2F
// ZeroxSapo 
//    3pdqZubSeuK3HfcyaHVRgJBEwmanV75wyNiektGNi4sgHFYJ
// capgallico
//    3r3bDxv8gjiuJqLFfHLnk53VQYSMECeyuCmT5wNYA3h48Kuq
//    7250
// WM Italia
//    7218
// WM weeky recap
//    6111

export function SpaceData(){
  return(
      `id
      createdAtTime
      image
      title
      downvotesCount
      summary
      tagsOriginal
      canonical
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
      }`
  )
}

export function ArticleData(){
  return(
      `id
      canonical
      createdAtTime
      downvotesCount
      image
      title
      tagsOriginal
      body
      summary
      ownedByAccount {
        profileSpace {
          name
          about
        }
      }`
  )
}

export function AllSapces() {
    return(
        '{id_eq: "6943", OR: {id_eq: "7183", OR: {id_eq: "10173", OR: {id_eq: "7218", OR: {id_eq: "7222", OR: {id_eq: "7250", OR: {id_eq: "8488"}}}}}}}'
    )
}
export function OnlyPersonal() {
    return(
        '{id_eq: "6943", OR: {id_eq: "7183", OR: {id_eq: "10173", OR: {id_eq: "7222", OR: {id_eq: "7250", OR: {id_eq: "8488"}}}}}}'
    )
}
export function WMitalia() {
    return(
        '{id_eq: "7218"}'
    )
}
export function WagMedia() {
  return(
      '{id_eq: "6111"}'
  )
}
export function HighPost1(){
  return(
    'id: "36310"'
  )
}

export function TeamList(){
  return(
    '{id_eq: "3op9AadRgrf15XEPBRVVGheg2hfmSfQYhFyruyhNbJk5bL7d", OR: {id_eq: "3pdqZubSeuK3HfcyaHVRgJBEwmanV75wyNiektGNi4sgHFYJ", OR: {id_eq: "3t7rPt8LK5iLLDG4BanW2ToTzpdkMLZRVea85PPkPjRC8C2F", OR: {id_eq: "3p9btWd5bCCc1Yk5RD2uWrwCgD5CsvzSRdzgamk9kJ2rbkCj", OR: {id_eq: "3pb5BqcoZCn4rNxW2aeX9kdmnGUVzL8M4Q1vdgiPqbupa1MK", OR: {id_eq: "", OR: {id_eq: "3ohANRnQ84YYHfMwpETL7YkXRnJ5cwCWfcXjshmc953epBAs", OR: {id_eq: "3r3bDxv8gjiuJqLFfHLnk53VQYSMECeyuCmT5wNYA3h48Kuq"}}}}}}}}, orderBy: id_ASC'
    )
}



export function ShowWMitalia(){
  return(
    `query MyQuery {
      posts(where: {space: ${WMitalia()}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${SpaceData()}
      }
    }`
  )
}
export function ShowAllSapces(){
  return(
    `query MyQuery {
      posts(where: {space: ${AllSapces()}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${SpaceData()}
      }
    }`
  )
}
export function ShowWagMedia(){
  return(
    `query MyQuery {
      posts(where: {space: ${WagMedia()}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${SpaceData()}
      }
    }`
  )
}
export function ShowOnlyPersonal(){
  return(
    `query MyQuery {
      posts(where: {space: ${OnlyPersonal()}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${SpaceData()}
      }
    }`
  )
}
export function ShowPolkadotFeed(){
  return(
    `query MyQuery {
      posts(where: {tagsOriginal_contains: "Polkadot", AND: {space: ${AllSapces()}}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${SpaceData()}    
      }
    }`
  )
}
export function ShowKusamaFeed(){
  return(
    `query MyQuery {
      posts(where: {tagsOriginal_contains: "Kusama", AND: {space: ${AllSapces()}}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${SpaceData()}    
      }
    }`
  )
}

export function TeamToShow(){
  return(
    `query MyQuery {
      accounts(where: ${TeamList()}) {
        profileSpace {
          id
          about
          image
          name
          email
          linksOriginal
        }
      }
    }`
  )
}

export function HighPostHome(){
  return(
    `query MyQuery {
      postById(${HighPost1()}) {
        ${SpaceData()}
      }
    }`
  )
}