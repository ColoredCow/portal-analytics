cube(`Invoices`, {
  sql: `SELECT * FROM   invoices`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Projects: {
      sql: `${CUBE}.project_id = ${Projects}.id`,
      relationship: `belongsTo`
    },
    
    Clients: {
      sql: `${CUBE}.client_id = ${Clients}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, amountPaid, createdAt, updatedAt, receivableDate]
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
    
    currency: {
      sql: `currency`,
      type: `string`
    },
    
    amount: {
      sql: `amount`,
      type: `string`
    },
    
    gst: {
      sql: `gst`,
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
    
    amountPaid: {
      sql: `amount_paid`,
      type: `string`
    },
    
    bankCharges: {
      sql: `bank_charges`,
      type: `string`
    },
    
    conversionRateDiff: {
      sql: `conversion_rate_diff`,
      type: `string`
    },
    
    tds: {
      sql: `tds`,
      type: `string`
    },
    
    tdsPercentage: {
      sql: `tds_percentage`,
      type: `string`
    },
    
    currencyTransactionCharge: {
      sql: `currency_transaction_charge`,
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
    
    paymentAt: {
      sql: `payment_at`,
      type: `time`
    },
    
    receivableDate: {
      sql: `receivable_date`,
      type: `time`
    },
    
    deletedAt: {
      sql: `deleted_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
