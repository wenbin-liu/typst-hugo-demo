#import "template/hugo_template.typ": project
#show: project.with(
    title: [Typst Template],
    date: datetime.today(),
    tags:("Typst","Rust"),
    categories:("Computers",)
)

= This Section

#lorem(50)

$ f(x, y) := cases(
  1 "if" (x dot y)/2 <= 0,
  2 "if" x "is even",
  3 "if" x in NN,
  4 "else",
) $

#lorem(70)

$ sum^10_(🥸=1)
  #rect(width: 4mm, height: 2mm)/🥸
  = 🧠 maltese $
