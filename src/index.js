import WorkflowDesigner from '@optimajet/workflow-designer';
//import '@optimajet/workflow-designer/localization/workflowdesigner.localization_ru'

const data = {
  schemecode: '<YOUR_SCHEME_CODE_VALUE>',
  processid: undefined,
};

var wfdesigner = new WorkflowDesigner({
  apiurl: '<YOUR_API_URL_VALUE>',
  renderTo: 'root',
  graphwidth: window.innerWidth,
  graphheight: window.innerHeight,
});

if (wfdesigner.exists(data)) {
  wfdesigner.load(data);
} else {
  wfdesigner.create();
}
