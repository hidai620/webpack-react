export const UP = 'UP';
export const DOWN = 'DOWN';

export function up(stepBy = 1) {
  return {
    type: UP,
    stepBy: stepBy
  };
}

export function down(stepBy) {
  return {
    type: DOWN,
    stepBy: stepBy
  };
}
