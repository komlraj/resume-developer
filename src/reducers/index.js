const initialState = {
  templateId : null,
  personalDetails: {},
  qualificationDetails: {},
  experienceDetails: {},
  skillsDetails: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PERSONALINFO':
      return {
        ...state,
        personalDetails : action.data
      }
    case 'SET_TEMPLATE':
      return {
        ...state,
        templateId : action.id
      }
    case 'SET_QUALIFICATIONINFO':
      return {
        ...state,
        qualificationDetails : action.data
      }
    case 'SET_EXPERIENCEINFO':
      return {
        ...state,
        experienceDetails : action.data
      }
    case 'SET_SKILLSINFO':
      return {
        ...state,
        skillsDetails : action.data
      }
    case "CREATE_RESUME" : {
      return {
        ...state
      }
    }
    default:
      break;
  }
}

export default reducer ;