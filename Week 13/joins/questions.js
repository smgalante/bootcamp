/* 2-JoinsRefresher
 * -/-/-/-/-/-/-/-/ */


// STUDENTS: HOW WOULD YOU ACCOMPLISH THESE JOINS?
// ===============================================

// Before anything, run the commands laid out in the schema.sql file


// 1. How would we grab every app in our database released for both Android and ios (using the string 'both', not the int 3)
// ===

SELECT app FROM apps LEFT JOIN os ON apps.os_id=os.id WHERE os='both';

SELECT app FROM apps LEFT JOIN devs ON apps.os_id=devs.id WHERE dev='Apple';

// 2. How would we grab only the app made by Apple (using Apple's name, not their id)
// ===




// 3. How would we display all app info except ids, including the name of the dev and the name of os
// NOTE: THIS IS A HARD ONE
// ===
SELECT apps.app, os.os, devs.dev FROM apps
JOIN 