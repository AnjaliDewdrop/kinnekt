var express = require('express');
var router = express.Router();

<<<<<<< HEAD
<<<<<<< HEAD
/* GET test */
router.get('/', function(req, res, next) {
=======
const util = require('util');
const fs = require('fs');
=======
const util = require("util");
const fs = require("fs");
>>>>>>> 8fa2939715e3ef0fb97c858dcf8171f84d95c33f
const TrainingApi = require("azure-cognitiveservices-customvision-training");
const PredictionApi = require("azure-cognitiveservices-customvision-prediction");

const setTimeoutPromise = util.promisify(setTimeout);

const trainingKey = "7176670c7aa14a749414cc93894c1211";
const predictionKey = "3bc0bc8e42eb428ab9a2d0aff467674c";
const sampleDataRoot = __dirname + "/voltDivider";

const endPoint = "https://southcentralus.api.cognitive.microsoft.com";

const trainer = new TrainingApi(trainingKey, endPoint);

async function apiCall() {
  console.log("Creating project...");
  const sampleProject = await trainer.createProject("Sample Project");
  const hemlockTag = await trainer.createTag(sampleProject.id, "Hemlock");
  const cherryTag = await trainer.createTag(
    sampleProject.id,
    "Japanese Cherry"
  );
  console.log("Adding images...");
  let fileUploadPromises = [];

  const hemlockDir = `${sampleDataRoot}/Hemlock`;
  const hemlockFiles = fs.readdirSync(hemlockDir);
  hemlockFiles.forEach(file => {
      fileUploadPromises.push(
        trainer.createImagesFromData(
          sampleProject.id,
          fs.readFileSync(`${hemlockDir}/${file}`),
          { tagIds: [hemlockTag.id] }
        )
      );
  });

  const cherryDir = `${sampleDataRoot}/Japanese Cherry`;
  const japaneseCherryFiles = fs.readdirSync(cherryDir);
  japaneseCherryFiles.forEach(file => {
      fileUploadPromises.push(
        trainer.createImagesFromData(
          sampleProject.id,
          fs.readFileSync(`${cherryDir}/${file}`),
          { tagIds: [cherryTag.id] }
        )
      );
  });

  await Promise.all(fileUploadPromises);
  console.log("Training...");
  let trainingIteration = await trainer.trainProject(sampleProject.id);

  // Wait for training to complete
  console.log("Training started...");
  while (trainingIteration.status == "Training") {
    console.log("Training status: " + trainingIteration.status);
    await setTimeoutPromise(1000, null);
    trainingIteration = await trainer.getIteration(
      sampleProject.id,
      trainingIteration.id
    );
  }
  console.log("Training status: " + trainingIteration.status);

    // Update iteration to be default
    trainingIteration.isDefault = true;
    await trainer.updateIteration(
      sampleProject.id,
      trainingIteration.id,
      trainingIteration
    );
    const predictor = new PredictionApi(predictionKey, endPoint);
    const testFile = fs.readFileSync(`${sampleDataRoot}/Test/test1.png`);

    const results = await predictor.predictImage(
      sampleProject.id,
      testFile,
      { iterationId: trainingIteration.id }
    );

    // Step 6. Show results
    console.log("Results:");
    results.predictions.forEach(predictedResult => {
        console.log(
          `\t ${predictedResult.tagName}: ${(
            predictedResult.probability * 100.0
          ).toFixed(2)}%`
        );
    });
};

/* GET test */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
    kinnekt()
>>>>>>> 7299d57c6818a9996e176908c6b2eaa617f7a47b
    res.send({ message: 'HI!!!' })
=======
  apiCall()
  res.send({ message: 'HI!!!' })
>>>>>>> 8fa2939715e3ef0fb97c858dcf8171f84d95c33f
});

module.exports = router;
