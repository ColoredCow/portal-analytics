cube(`ProjectsOldStageBillings`, {
  sql: `SELECT * FROM   projects_old_stage_billings`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    FinanceInvoices: {
      sql: `${CUBE}.finance_invoice_id = ${FinanceInvoices}.id`,
      relationship: `belongsTo`
    },
    
    ProjectOldFinanceInvoices: {
      sql: `${CUBE}.finance_invoice_id = ${ProjectOldFinanceInvoices}.finance_invoice_id`,
      relationship: `belongsTo`
    },
    
    ProjectsOldFinanceInvoices: {
      sql: `${CUBE}.finance_invoice_id = ${ProjectsOldFinanceInvoices}.finance_invoice_id`,
      relationship: `belongsTo`
    },
    
    Invoices: {
      sql: `${CUBE}.invoice_id = ${Invoices}.id`,
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
