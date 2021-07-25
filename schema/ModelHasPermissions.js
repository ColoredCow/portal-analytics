cube(`ModelHasPermissions`, {
  sql: `SELECT * FROM cc_portal.model_has_permissions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Permissions: {
      sql: `${CUBE}.permission_id = ${Permissions}.id`,
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
