cube(`ProspectChecklistMeta`, {
  sql: `SELECT * FROM   prospect_checklist_meta`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Prospects: {
      sql: `${CUBE}.prospect_id = ${Prospects}.id`,
      relationship: `belongsTo`
    },
    
    ChecklistTasks: {
      sql: `${CUBE}.checklist_task_id = ${ChecklistTasks}.id`,
      relationship: `belongsTo`
    },
    
    ModuleChecklistTasks: {
      sql: `${CUBE}.checklist_task_id = ${ModuleChecklistTasks}.id`,
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
    
    metaKey: {
      sql: `meta_key`,
      type: `string`
    },
    
    metaValue: {
      sql: `meta_value`,
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
