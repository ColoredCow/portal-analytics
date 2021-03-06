cube(`ProjectsOldFinanceInvoices`, {
  sql: `SELECT * FROM   projects_old_finance_invoices`,
  
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
    
    ProjectOldFinanceInvoices: {
      sql: `${CUBE}.finance_invoice_id = ${ProjectOldFinanceInvoices}.finance_invoice_id`,
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
    id: {
      sql: `CONCAT(${CUBE}.project_id, ${CUBE}.finance_invoice_id)`,
      type: `number`,
      primaryKey: true
    },
  },
  
  dataSource: `default`
});
