import { gql } from "@apollo/client";


export const GET_ALLPROGRAMS = gql`
query AllProgramsQuery {
  allProgram {
    title
    _id
  }
}
`

export const GET_PROGRAM_BY_ID = gql`
query ProgramByIdQuery ($id: ID!){
  Program (id: $id) {
    title
    difficulty
    duration
    focus
    description
    }
  }
`

export const GET_WORKOUTS_BY_PROGRAM_ID = gql`
query WorkoutByProgramIdQuery ($id: ID!){
  Program (id: $id) {
    slug {
      current
    }
    workouts { 
      _key 
      day
    Workout {
      _id
      title
      duration
      calories
      categories
      description
      exercises {
        __typename
      }
    }
    }

}
  }

`

export const GET_WORKOUT_BY_ID = gql`
query WorkoutById ($id: ID!) {
  Workout (id: $id) {
    title
    calories
    duration
    categories
  }
}
`

// Reactive Variables:

export const GET_IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    userIsLoggedIn @client
  }
`;

export const GET_USER = gql`
  query User {
    user @client
  }
`;

export const GET_LOVELIST = gql`
  query LoveList {
    loveList @client
  }
`;