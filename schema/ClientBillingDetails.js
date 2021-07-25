cube(`ClientBillingDetails`, {
  sql: `SELECT * FROM cc_portal.client_billing_details`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Clients: {
      sql: `${CUBE}.client_id = ${Clients}.id`,
      relationship: `belongsTo`
    }
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
    
    serviceRates: {
      sql: `service_rates`,
      type: `string`
    },
    
    serviceRateTerm: {
      sql: `service_rate_term`,
      type: `string`
    },
    
    discountRate: {
      sql: `discount_rate`,
      type: `string`
    },
    
    discountRateTerm: {
      sql: `discount_rate_term`,
      type: `string`
    },
    
    billingFrequency: {
      sql: `billing_frequency`,
      type: `string`
    },
    
    bankCharges: {
      sql: `bank_charges`,
      type: `string`
    },
    
    currency: {
      sql: `currency`,
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
