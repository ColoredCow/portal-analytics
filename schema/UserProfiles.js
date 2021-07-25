cube(`UserProfiles`, {
  sql: `SELECT * FROM cc_portal.user_profiles`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Users: {
      sql: `${CUBE}.user_id = ${Users}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, fatherName, husbandName, createdAt, updatedAt, dateOfBirth, dateOfJoining]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    gender: {
      sql: `gender`,
      type: `string`
    },
    
    fatherName: {
      sql: `father_name`,
      type: `string`
    },
    
    husbandName: {
      sql: `husband_name`,
      type: `string`
    },
    
    mobile: {
      sql: `mobile`,
      type: `string`
    },
    
    designation: {
      sql: `designation`,
      type: `string`
    },
    
    currentLocation: {
      sql: `current_location`,
      type: `string`
    },
    
    maritalStatus: {
      sql: `marital_status`,
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
    
    dateOfBirth: {
      sql: `date_of_birth`,
      type: `time`
    },
    
    dateOfJoining: {
      sql: `date_of_joining`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
