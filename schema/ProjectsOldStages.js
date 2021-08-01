cube(`ProjectsOldStages`, {
  sql: `SELECT * FROM projects_old_stages`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Projects: {
      sql: `${CUBE}.project_id = ${Projects}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdAt, updatedAt, startDate, endDate]
    },
    
    cost: {
      sql: `cost`,
      type: `sum`
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
    
    currencyCost: {
      sql: `currency_cost`,
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
    
    startDate: {
      sql: `start_date`,
      type: `time`
    },
    
    endDate: {
      sql: `end_date`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
