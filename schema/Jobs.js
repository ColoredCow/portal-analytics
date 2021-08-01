cube(`Jobs`, {
  sql: `SELECT * FROM jobs`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    queue: {
      sql: `queue`,
      type: `string`
    },
    
    payload: {
      sql: `payload`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
