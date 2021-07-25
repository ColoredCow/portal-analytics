cube(`ClientAddresses`, {
  sql: `SELECT * FROM cc_portal.client_addresses`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Clients: {
      sql: `${CUBE}.client_id = ${Clients}.id`,
      relationship: `belongsTo`
    },
    
    Countries: {
      sql: `${CUBE}.country_id = ${Countries}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, city, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    gstNumber: {
      sql: `gst_number`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    areaCode: {
      sql: `area_code`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    type: {
      sql: `type`,
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
