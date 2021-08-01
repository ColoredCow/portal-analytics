cube(`RoleHasPermissions`, {
  sql: `SELECT * FROM role_has_permissions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Permissions: {
      sql: `${CUBE}.permission_id = ${Permissions}.id`,
      relationship: `belongsTo`
    },
    
    Roles: {
      sql: `${CUBE}.role_id = ${Roles}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    
  },
  
  dataSource: `default`
});
