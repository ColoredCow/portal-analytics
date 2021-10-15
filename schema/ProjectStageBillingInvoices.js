cube(`ProjectStageBillingInvoices`, {
  sql: `SELECT * FROM   project_stage_billing_invoices`,
  
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
      sql: `id`,
      type: `number`,
      primaryKey: true
    }
  },
  
  dataSource: `default`
});
