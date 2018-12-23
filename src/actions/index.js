export const createResume = (data) => {
  return {
    type: 'CREATE_RESUME',
    data
  }
}

export const setTemplate = (id) => {
  return {
    type: 'SET_TEMPLATE',
    id
  }
}

export const setPersonalInfo = (data) => {
  return {
    type: 'SET_PERSONALINFO',
    data
  }
}

export const setQualificationInfo = (data) => {
  return {
    type: 'SET_QUALIFICATIONINFO',
    data
  }
}

export const setSkillsInfo = (data) => {
  return {
    type: 'SET_SKILLSINFO',
    data
  }
}

export const setExperienceInfo = (data) => {
  return {
    type: 'SET_EXPERIENCEINFO',
    data
  }
}