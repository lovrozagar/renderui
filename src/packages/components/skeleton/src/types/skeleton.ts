import type { ClassNameProps, PolymorphicProps, Simplify } from "@renderui/utils"
import type { AnimationStyleVariables } from "@renderui/utils-internal"
import type { ComponentPropsWithRef } from "react"
import type { SkeletonClassesProps } from "../classes/skeleton-classes"

type SkeletonPrimitiveProps = Omit<ComponentPropsWithRef<"div">, "className">

type SkeletonRenderCustomProps = ClassNameProps &
  SkeletonClassesProps &
  PolymorphicProps &
  Pick<AnimationStyleVariables, "animationDuration" | "animationTimingFunction"> & {
    count?: number
  }

type SkeletonProps = Simplify<SkeletonPrimitiveProps & SkeletonRenderCustomProps>

export type { SkeletonProps }
