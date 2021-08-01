cube(`NdaMeta`, {
  sql: `SELECT * FROM nda_meta`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    LegalDocumentMailTemplates: {
      sql: `${CUBE}.mail_template_id = ${LegalDocumentMailTemplates}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt, dueDate]
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
    
    ndaContactPersons: {
      sql: `nda_contact_persons`,
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
    
    dueDate: {
      sql: `due_date`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
