cube(`ModelHasRoles`, {
  sql: `SELECT * FROM model_has_roles`,
  
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
    id: {
      sql: `CONCAT(${CUBE}.role_id, ${CUBE}.model_id, ${CUBE}.model_type)`,
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
