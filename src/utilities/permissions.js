const permissions = {
  Administrator: [
    'seeBadges',
    'assignBadges',
    'createBadges',
    'deleteBadges',
    'updateBadges',
    'createPopup',
    'updatePopup',
    'deleteProject',
    'postProject',
    'putProject',
    'assignProjectToUsers',
    'importTask',
    'postTask',
    'updateNum',
    'updateTask',
    'swapTask',
    'deleteTeam',
    'putTeam',
    'assignTeamToUsers',
    'editTimeEntry',
    'deleteTimeEntry',
    'updatePassword',
    'getUserProfiles',
    'getProjectMembers',
    'postUserProfile',
    'putUserProfile',
    'putUserProfileImportantInfo',
    'infringmentAuthorizer',
    'deleteUserProfile',
    'postWbs',
    'deleteWbs',
    'getAllInvInProjectWBS',
    'postInvInProjectWBS',
    'getAllInvInProject',
    'postInvInProject',
    'transferInvById',
    'delInvById',
    'unWasteInvById',
    'getInvIdInfo',
    'putInvById',
    'getInvTypeById',
    'putInvType',
    'getAllInvType',
    'postInvType',
    'getWeeklySummaries',
    'getTimeZoneAPIKey',
    'checkLeadTeamOfXplus',
  ],
  Volunteer: [
    'getReporteesLimitRoles',
  ],
  'Core Team': [
    'getUserProfiles',
    'getProjectMembers',
    'getAllInvInProjectWBS',
    'postInvInProjectWBS',
    'getAllInvInProject',
    'postInvInProject',
    'transferInvById',
    'delInvById',
    'unWasteInvById',
    'getInvIdInfo',
    'putInvById',
    'getInvTypeById',
    'putInvType',
    'getAllInvType',
    'postInvType',
    'getWeeklySummaries',
    'getTimeZoneAPIKey',
    'checkLeadTeamOfXplus',
  ],
  Manager: [
    'getUserProfiles',
    'getProjectMembers',
    'putUserProfile',
    'infringmentAuthorizer',
    'getReporteesLimitRoles',
    'getAllInvInProjectWBS',
    'postInvInProjectWBS',
    'getAllInvInProject',
    'postInvInProject',
    'transferInvById',
    'delInvById',
    'unWasteInvById',
    'getInvIdInfo',
    'putInvById',
    'getInvTypeById',
    'putInvType',
    'getAllInvType',
    'postInvType',
    'getWeeklySummaries',
    'getTimeZoneAPIKey',
    'checkLeadTeamOfXplus',
  ],
  Mentor: [
    'getUserProfiles',
    'getProjectMembers',
    'putUserProfile',
    'infringmentAuthorizer',
    'getReporteesLimitRoles',
    'getAllInvInProjectWBS',
    'postInvInProjectWBS',
    'getAllInvInProject',
    'postInvInProject',
    'transferInvById',
    'delInvById',
    'unWasteInvById',
    'getInvIdInfo',
    'putInvById',
    'getInvTypeById',
    'putInvType',
    'getAllInvType',
    'postInvType',
    'getWeeklySummaries',
    'getTimeZoneAPIKey',
    'checkLeadTeamOfXplus',
  ],
  Owner: [
    'seeBadges',
    'assignBadges',
    'createBadges',
    'deleteBadges',
    'updateBadges',
    'createPopup',
    'updatePopup',
    'deleteProject',
    'postProject',
    'putProject',
    'assignProjectToUsers',
    'importTask',
    'postTask',
    'updateNum',
    'updateTask',
    'swapTask',
    'deleteTeam',
    'putTeam',
    'assignTeamToUsers',
    'editTimeEntry',
    'deleteTimeEntry',
    'updatePassword',
    'getUserProfiles',
    'getProjectMembers',
    'postUserProfile',
    'putUserProfile',
    'putUserProfileImportantInfo',
    'deleteUSerProfile',
    'infringmentAuthorizer',
    'postWbs',
    'deleteWbs',
    'getAllInvInProjectWBS',
    'postInvInProjectWBS',
    'getAllInvInProject',
    'postInvInProject',
    'transferInvById',
    'delInvById',
    'unWasteInvById',
    'getInvIdInfo',
    'putInvById',
    'getInvTypeById',
    'putInvType',
    'getAllInvType',
    'postInvType',
    'getWeeklySummaries',
    'getTimeZoneAPIKey',
    'checkLeadTeamOfXplus',
  ],
};

const hasPermission = (role, action) => {
  let isAllowed;
  // console.log('user role permissions: ', permissions[role]);
  if (permissions[role].includes(action)) {
    isAllowed = true;
  } else {
    isAllowed = false;
  }
  return isAllowed;
};

module.exports = hasPermission;
