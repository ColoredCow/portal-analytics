cube(`ModuleChecklistTasks`, {
  sql: `SELECT * FROM cc_portal.module_checklist_tasks`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    ModuleChecklists: {
      sql: `${CUBE}.module_checklist_id = ${ModuleChecklists}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    slug: {
      sql: `slug`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
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
