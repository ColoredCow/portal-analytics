cube(`ProjectTeamMembers`, {
  sql: `SELECT * FROM   project_team_members`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Projects: {
      sql: `${CUBE}.project_id = ${Projects}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    project_id: {
      sql: `project_id`,
      type: `number`,
    },
    
    designation: {
      sql: `designation`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    },
    
    startedOn: {
      sql: `started_on`,
      type: `time`
    },
    
    endedOn: {
      sql: `ended_on`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
