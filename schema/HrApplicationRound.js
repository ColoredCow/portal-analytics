cube(`HrApplicationRound`, {
  sql: `SELECT * FROM hr_application_round`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    HrApplications: {
      sql: `${CUBE}.hr_application_id = ${HrApplications}.id`,
      relationship: `belongsTo`
    },
    
    HrRounds: {
      sql: `${CUBE}.hr_round_id = ${HrRounds}.id`,
      relationship: `belongsTo`
    },
    
    CalendarMeetings: {
      sql: `${CUBE}.calendar_meeting_id = ${CalendarMeetings}.id`,
      relationship: `belongsTo`
    },
    
    ProspectCalendarMeeting: {
      sql: `${CUBE}.calendar_meeting_id = ${ProspectCalendarMeeting}.calendar_meeting_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, scheduledDate, conductedDate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    calendarEvent: {
      sql: `calendar_event`,
      type: `string`
    },
    
    roundStatus: {
      sql: `round_status`,
      type: `string`
    },
    
    mailSubject: {
      sql: `mail_subject`,
      type: `string`
    },
    
    mailBody: {
      sql: `mail_body`,
      type: `string`
    },
    
    scheduledDate: {
      sql: `scheduled_date`,
      type: `time`
    },
    
    scheduledEnd: {
      sql: `scheduled_end`,
      type: `time`
    },
    
    conductedDate: {
      sql: `conducted_date`,
      type: `time`
    },
    
    mailSentAt: {
      sql: `mail_sent_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
