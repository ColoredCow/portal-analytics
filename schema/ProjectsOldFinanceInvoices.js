cube(`ProjectsOldFinanceInvoices`, {
  sql: `SELECT * FROM cc_portal.projects_old_finance_invoices`,
  
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
