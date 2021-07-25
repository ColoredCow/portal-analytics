cube(`ModelHasRoles`, {
  sql: `SELECT * FROM cc_portal.model_has_roles`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
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
    modelType: {
      sql: `model_type`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
