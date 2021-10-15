cube(`ProjectTeamMembersEffort`, {
  sql: `SELECT * FROM   project_team_members_effort`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    ProjectTeamMembers: {
      sql: `${CUBE}.project_team_member_id = ${ProjectTeamMembers}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    project_monthly_hours: {
      sql: `actual_effort`,
      type: `sum`,
    }
  },
  
  dimensions: {
    project_team_member_id: {
      sql: `project_team_member_id`,
      type: `number`,
    },

    project_id: {
      sql: `${ProjectTeamMembers}.project_id`,
      type: `number`,
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    },
    
    addedOn: {
      sql: `added_on`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
