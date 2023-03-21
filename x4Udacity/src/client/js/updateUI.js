function updateUI(data) {
  const resultTag = document.querySelector('#tag');
  const resultAgreement = document.querySelector('#agreement');
  const resultConfidence = document.querySelector('#confidence');
  const resultIrony = document.querySelector('#irony');
  const resultSubjectivity = document.querySelector('#subjectivity');

  resultTag.innerHTML = `Score Tag: ${data.score_tag}`;
  resultAgreement.innerHTML = `Agreement: ${data.agreement}`;
  resultConfidence.innerHTML = `Confidence: ${data.confidence}`;
  resultIrony.innerHTML = `Irony: ${data.irony}`;
  resultSubjectivity.innerHTML = `Subjectivity: ${data.subjectivity}`;
  console.log(tag, agreement, subjectivity, confidence, irony);
}

export { updateUI };
