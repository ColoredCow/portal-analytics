cube(`ClientsOld`, {
  sql: `SELECT * FROM cc_portal.clients_old`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, country, createdAt, updatedAt]
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
    
    emails: {
      sql: `emails`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    country: {
      sql: `country`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    gstNum: {
      sql: `gst_num`,
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
