cube(`CalendarMeetings`, {
  sql: `SELECT * FROM cc_portal.calendar_meetings`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, eventTitle, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    attendees: {
      sql: `attendees`,
      type: `string`
    },
    
    eventTitle: {
      sql: `event_title`,
      type: `string`
    },
    
    calendarEvent: {
      sql: `calendar_event`,
      type: `string`
    },
    
    hangoutLink: {
      sql: `hangout_link`,
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
    
    startAt: {
      sql: `start_at`,
      type: `time`
    },
    
    endsAt: {
      sql: `ends_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
