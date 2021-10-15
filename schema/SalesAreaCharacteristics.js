cube(`SalesAreaCharacteristics`, {
  sql: `SELECT * FROM   sales_area_characteristics`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    SalesAreas: {
      sql: `${CUBE}.sales_area_id = ${SalesAreas}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    operator: {
      sql: `operator`,
      type: `string`
    },
    
    value: {
      sql: `value`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
