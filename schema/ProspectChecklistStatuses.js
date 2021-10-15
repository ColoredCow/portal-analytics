cube(`ProspectChecklistStatuses`, {
  sql: `SELECT * FROM   prospect_checklist_statuses`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    ModuleChecklists: {
      sql: `${CUBE}.module_checklist_id = ${ModuleChecklists}.id`,
      relationship: `belongsTo`
    },
    
    ModuleChecklistTasks: {
      sql: `${CUBE}.module_checklist_task_id = ${ModuleChecklistTasks}.id`,
      relationship: `belongsTo`
    },
    
    Prospects: {
      sql: `${CUBE}.prospect_id = ${Prospects}.id`,
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
    
    status: {
      sql: `status`,
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
