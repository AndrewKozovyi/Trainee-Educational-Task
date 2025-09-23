export interface OnBoardingTask {
  name: string;
  link: string;
}

export const navigatingBar: OnBoardingTask[] = [
  {
    name: 'Change Detection OnPush',
    link: '/changeDetectionOnPush',
  },
  {
    name: 'ng-content, ng-template and ng-container',
    link: '/templates',
  },
  {
    name: 'Attribute and Structure Directives',
    link: '/directives',
  },
  {
    name: 'Control Value Accessor',
    link: '/controlValueAccessor',
  },
  {
    name: 'Subject, BehaviorSubject, ReplaySubject, AsyncSubject',
    link: '/rxJsSubjects',
  },
  {
    name: 'RxJs Without Operators',
    link: '/rxJsNoOperators',
  },
]
