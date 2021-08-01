cube(`FinanceInvoices`, {
  sql: `SELECT * FROM finance_invoices`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, currencyPaidAmount, createdAt, updatedAt, paidOn, chequeReceivedDate, chequeClearedDate, chequeBouncedDate, dueDate]
    },
    
    sentAmount: {
      sql: `sent_amount`,
      type: `sum`
    },
    
    paidAmount: {
      sql: `paid_amount`,
      type: `sum`
    },
    
    dueAmount: {
      sql: `due_amount`,
      type: `sum`
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
    
    currencySentAmount: {
      sql: `currency_sent_amount`,
      type: `string`
    },
    
    currencyPaidAmount: {
      sql: `currency_paid_amount`,
      type: `string`
    },
    
    currencyTransactionCharge: {
      sql: `currency_transaction_charge`,
      type: `string`
    },
    
    currencyTransactionTax: {
      sql: `currency_transaction_tax`,
      type: `string`
    },
    
    currencyTds: {
      sql: `currency_tds`,
      type: `string`
    },
    
    currencyDueAmount: {
      sql: `currency_due_amount`,
      type: `string`
    },
    
    paymentType: {
      sql: `payment_type`,
      type: `string`
    },
    
    chequeStatus: {
      sql: `cheque_status`,
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
    
    paidOn: {
      sql: `paid_on`,
      type: `time`
    },
    
    chequeReceivedDate: {
      sql: `cheque_received_date`,
      type: `time`
    },
    
    chequeClearedDate: {
      sql: `cheque_cleared_date`,
      type: `time`
    },
    
    chequeBouncedDate: {
      sql: `cheque_bounced_date`,
      type: `time`
    },
    
    dueDate: {
      sql: `due_date`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
