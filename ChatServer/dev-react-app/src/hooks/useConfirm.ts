export const useConfirm = (firstField: string, secondField: string) => {
  return {
    isMatchAndFilled: secondField != '' && secondField == firstField,
    isEmptySecondField: secondField == '',
    isMatch: firstField == secondField
  }
}