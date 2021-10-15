cube(`AppointmentSlots`, {
  sql: `SELECT * FROM   appointment_slots`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Users: {
      sql: `${CUBE}.user_id = ${Users}.id`,
      relationship: `belongsTo`
    },
    
    HrApplicationRound: {
      sql: `${CUBE}.application_round_id = ${HrApplicationRound}.id`,
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
    
    recurrence: {
      sql: `recurrence`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    reservedForType: {
      sql: `reserved_for_type`,
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
    
    startTime: {
      sql: `start_time`,
      type: `time`
    },
    
    endTime: {
      sql: `end_time`,
      type: `time`
    },
    
    deletedAt: {
      sql: `deleted_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
