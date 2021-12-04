cube(`InvoicesOld`, {
  sql: `SELECT * FROM   invoices_old`,
  
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
    },
    
    amount: {
      sql: `amount`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    currency: {
      sql: `currency`,
      type: `string`
    },
    
    comments: {
      sql: `comments`,
      type: `string`
    },
    
    filePath: {
      sql: `file_path`,
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
    
    sentOn: {
      sql: `sent_on`,
      type: `time`
    },
    
    dueOn: {
      sql: `due_on`,
      type: `time`
    },
    
    deletedAt: {
      sql: `deleted_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
