cube(`SalaryConfigurations`, {
  sql: `SELECT * FROM cc_portal.salary_configurations`,
  
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
    
    slug: {
      sql: `slug`,
      type: `string`
    },
    
    label: {
      sql: `label`,
      type: `string`
    },
    
    percentageRate: {
      sql: `percentage_rate`,
      type: `string`
    },
    
    percentageAppliedOn: {
      sql: `percentage_applied_on`,
      type: `string`
    },
    
    fixedAmount: {
      sql: `fixed_amount`,
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
