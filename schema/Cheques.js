cube(`Cheques`, {
  sql: `SELECT * FROM cc_portal.cheques`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
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
    
    status: {
      sql: `status`,
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
    
    receivedOn: {
      sql: `received_on`,
      type: `time`
    },
    
    clearedOn: {
      sql: `cleared_on`,
      type: `time`
    },
    
    bouncedOn: {
      sql: `bounced_on`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
