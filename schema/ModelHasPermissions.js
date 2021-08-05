cube(`ModelHasPermissions`, {
  sql: `SELECT * FROM model_has_permissions`,
  
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
    id: {
      sql: `CONCAT(${CUBE}.permission_id, ${CUBE}.model_id, ${CUBE}.model_type)`,
      type: `number`,
      primaryKey: true
    },

    modelType: {
      sql: `model_type`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
