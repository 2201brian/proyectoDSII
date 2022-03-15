const Multer = require("multer");
const FirebaseStorage = require("multer-firebase-storage");

const multer = Multer({
    storage: FirebaseStorage({
        bucketName: "filespapeleria.appspot.com",
        credentials: {
            clientEmail: "firebase-adminsdk-mu6m7@filespapeleria.iam.gserviceaccount.com",
            privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDxz1jrArx26JZ5\nU2pzGC6eIoHFmHTR/N/zxh/R3EDujb84WlMVJTQiDG/6iu2JbHurSWggBehAN3Xo\nXf5vSnF4sJTtEPAjcgaXT4U7FPuK9c8CKHCFQ6oX/QPA0oHfXrnkh2fjB474zpXB\nLtHa94ve67WeD+xwJC+6DjrZpc4m7940PvuSc31LtMuMNhQgn3AeWoXPuI/WA5VU\n00m9CtJaFoOMi3y9be8/KveIEiIGRqCScwVIjzq/kcSSwJlJiHS2QJva003uM+oi\nkOuTyI99ZW91l8B/vdK4t2lDzBZqQfZB6qzJ8XMig5g42CxFxzSfosLQMNi1qpn+\nDCp2fq5jAgMBAAECggEAWHF4+dgx26Idq3mlpTwyjNddNMsa61U9CnosWENhon9I\n8hEjc0f8xflbmb1nvUxm/VLnmVLfzGEcqKV8cvM9BqI7jmwUETrbC0vkFKSLjpty\noDzvTubdV1HNJiE4rF0Gy/30svaoRfu1jYeU7Sx+xcXb01jKp4esxzX+M24wNU/v\nqJkcD82/wr3yeJGpf4M0u0ZS9xlq2BjyH+MbKnKcuOT0kchoj8Iai3soMJyNOnMS\n0CzIC/E+kwZt1yZ6QGewnrEswOmFczTAjsyMNDRSCKGByrtSNWP5/OZqiFXl3HxG\nNtE3n8ja5Vq5fTmUD7P2+pCPLO91IP6sBdxpLX9I3QKBgQD64n12MnwAxyAgEhGb\n2vO2u/J5LWhCBRUvXmOo7mYWkPiowEV4TOoX1E1lMK8x/tXuYAtnLZYPByddV5kA\nDl01mz4ac1nEsv6O1NxctFMABXEs760xaTCM18aCY3a6rKfjaB9x2bGQWRr0ggdj\nLaGQt23Eo4canuhWHmU5R+KE5wKBgQD2vX2nj9MuBCNSqe2CyNfbFa6lQ9+fP9k2\naaLzB8Wm9b7edWTEIR1Dn8w50EzvAPhq3ShafTwo3FOPg7A+AsvX+NTQBGlQnuAc\n8ZSM/DbctfBxUcVcom2wU1P2h7qxBSDZuplS/UYWw1i/6MkdR7btHeIcGWwHVjcI\nT+Rh71qfJQKBgGxtnpOK1hTv+m5h4MJfKp17NRwyB7EgyTsjrCbCgdSW6yDjmCKZ\n+0I5OwnUtKMC5CqVz9fT19q+2MB6r2Fa0+XrJjgASne8dE/+pw5Z0NVdhMBLBasp\nLxZv2xdXLWUYYabixVRLJXahTAkIeXDfs8f7vrERi75xlzBBCrZq3vdZAoGBAPCg\nQa+s0q1Yub3/HDLkfaYaEhT4CVh74vBuusw6MyatGDRI1jlzdd+iMn/bRXv8PUey\nYI1G/ul2XUNjkPgYsATylVA8TRyjpDp12oJX4YUDJfbNYSUC/ufri8GsAoRqVOwh\nTy+g8r52SdH2SlP0wU+jSgRPQowxJ0BC8Z4U2BLFAoGBAL8MKREHhckGrZaeRHlh\nQNJGrN3o/feDhlGyWytRIczirQ/TCWVSTOoRaxKPPG28veeMH3643NEB2sFiyifq\nkAkCsM+CQawlOWYhSah0lPt8xAHDp8q0XhKs2RRQJUZ75o+ZtLYGWDu8N9YVuivk\naXKAWwqTdAxIaXRJkWB5vtZF\n-----END PRIVATE KEY-----\n",
            projectId: "filespapeleria"
        }
    })
});
module.exports = {multer}