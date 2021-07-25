cube(`Clients`, {
  sql: `SELECT * FROM cc_portal.clients`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
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
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    pincode: {
      sql: `pincode`,
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
