cube(`FailedJobs`, {
  sql: `SELECT * FROM   failed_jobs`,
  
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
    
    connection: {
      sql: `connection`,
      type: `string`
    },
    
    queue: {
      sql: `queue`,
      type: `string`
    },
    
    payload: {
      sql: `payload`,
      type: `string`
    },
    
    exception: {
      sql: `exception`,
      type: `string`
    },
    
    failedAt: {
      sql: `failed_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
