cube(`ProjectOldFinanceInvoices`, {
  sql: `SELECT * FROM   project_old_finance_invoices`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Projects: {
      sql: `${CUBE}.project_id = ${Projects}.id`,
      relationship: `belongsTo`
    },
    
    FinanceInvoices: {
      sql: `${CUBE}.finance_invoice_id = ${FinanceInvoices}.id`,
      relationship: `belongsTo`
    },
    
    ProjectsOldFinanceInvoices: {
      sql: `${CUBE}.finance_invoice_id = ${ProjectsOldFinanceInvoices}.finance_invoice_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    
  },
  
  dataSource: `default`
});
